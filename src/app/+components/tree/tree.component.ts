/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
   cloneDeep as _cloneDeep,
   get as _get,
   set as _set
} from 'lodash';
import { StNodeTree, StNodeTreeChange, StInputError } from '@stratio/egeo';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'st-tree-doc',
   templateUrl: './tree.component.html',
   styleUrls: ['./tree.component.scss']
})

export class StTreeDocComponent implements OnInit {
   public treeForm: FormGroup;
   public nodeForm: FormGroup;
   public treeModel: TreeModel = { levels: 10, nodes: 50, max: undefined, name: 'Node' };
   public nodeModel: NodeModel = { name: 'New name', path: 'children[0]' };
   public forceTreeValidations: boolean = false;
   public forceNodeValidations: boolean = false;
   public errors: StInputError = { generic: 'Error' };

      // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Tree',
      description: 'The tree is a component for representing information in a hierarchical way. It allows navigating between the different nodes and visualizing the parent-child relationships between nodes. Up to 5 depth levels can be displayed at a time. To avoid a horizontal scroll, from the 5th level will be collapsing previous levels, starting with the first parent.',
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id value for qa test' },
            { paramName: 'tree', type: 'StNodeTree', required: true, details: 'Tree root node' },
            { paramName: 'maxLevel', type: TYPES.NUM, required: false, details: 'Max level to show. From this level the tree does not expand more ' },
            { paramName: 'isRoot', type: TYPES.BOOL, required: false, details: 'TRUE: the first node is root and not show dots, FALSE: the first node is not root and we put three dots to indicate that are more levels upper. DEFAULT: true' },
            { paramName: 'expandFatherBranch', type: TYPES.BOOL, required: false, details: 'TRUE: Expand the path from the root to the expanded node if any node is not expanded. FALSE: Only expand the selected node, DEFAULT: true' },
            { paramName: 'collapseChildsBranch', type: TYPES.BOOL, required: false, details: 'TRUE: Collapse all child nodes. FALSE: Only collapse the selected node, DEFAULT: true' },
            { paramName: 'changeStreamNotification', type: 'Observable<StNodeTreeChange>', required: false, details: 'Stream for notificating changes in some node and not change all tree' },
         ],
         outputs: [
            { paramName: 'toogleNode', type: 'StNodeTreeChange', required: false, details: 'Notify any node expansion or collapsed' },
            { paramName: 'selectNode', type: 'StNodeTreeChange', required: false, details: 'Notify any node selection' },
            { paramName: 'navigatePrevious', type: 'Event', required: false, details: 'Notify click over three dots to indicate that user wants to go up in tree structrure' }
         ]
      },
      exampleDesc: ''
   };
   // tslint:enable:max-line-length

   public treeA: StNodeTree = {
      name: 'hdfs',
      icon: 'icon-folder',
      expanded: false,
      children: [
         { name: 'folder A', icon: 'icon-folder' },
         {
            name: 'folder B', icon: 'icon-folder', expanded: false, children: [
               {
                  name: 'folder B.0', icon: 'icon-folder', children: [
                     { name: 'folder B.0.0', icon: 'icon-file' },
                     { name: 'folder B.0.1', icon: 'icon-file' }
                  ]
               },
               {
                  name: 'folder B.1', icon: 'icon-folder', expanded: false, children: [
                     { name: 'folder B.1.0', icon: 'icon-file' },
                     { name: 'folder B.1.1', icon: 'icon-file' }
                  ]
               },
               { name: 'folder B.2', icon: 'icon-file' },
               { name: 'folder B.3', icon: 'icon-file' },
               {
                  name: 'folder B.4', icon: 'icon-folder', expanded: true, children: [
                     { name: 'folder B.4.0', icon: 'icon-file' },
                     { name: 'folder B.4.1', icon: 'icon-file' },
                     { name: 'folder B.4.2', icon: 'icon-file' },
                     { name: 'folder B.4.3', icon: 'icon-file' },
                     { name: 'folder B.4.4', icon: 'icon-file' }
                  ]
               }
            ]
         },
         { name: 'folder C', icon: 'icon-file' },
         { name: 'folder D', icon: 'icon-folder' }
      ]
   };
   public treeB: StNodeTree;

   public notificationChangeStream: Observable<StNodeTreeChange>;
   private subject: Subject<StNodeTreeChange> = new Subject<StNodeTreeChange>();
   private selectedPath: string;

   constructor(private _fb: FormBuilder) {
      this.notificationChangeStream = this.subject.asObservable();
      this.treeB = _cloneDeep(this.treeA);
   }

   ngOnInit(): void {
      this.treeForm = this._fb.group({
         'levels': [this.treeModel.levels, [Validators.required]],
         'nodes': [this.treeModel.nodes, [Validators.required]],
         'max': [this.treeModel.max],
         'name': [this.treeModel.name, [Validators.required]]
      });
      this.nodeForm = this._fb.group({
         'name': [this.nodeModel.name, [Validators.required]],
         'path': [this.nodeModel.path, [Validators.required]]
      });
   }

   onToogleNode(nodeChange: StNodeTreeChange, tree: StNodeTree): void {
      console.log('toogle node', nodeChange);
      const node: StNodeTree = _get<StNodeTree>(tree, nodeChange.path, tree);
      node.expanded = nodeChange.node.expanded;
      tree = _cloneDeep(tree);
   }

   onSelectNode(nodeChange: StNodeTreeChange, tree: StNodeTree): void {
      console.log('select node', nodeChange);
      let node: StNodeTree;
      if (this.selectedPath) {
         node = _get<StNodeTree>(tree, this.selectedPath, tree);
         node.selected = false;
      }
      this.selectedPath = nodeChange.path;
      node = _get<StNodeTree>(tree, nodeChange.path, tree);
      node.selected = true;
      tree = _cloneDeep(tree);
   }

   onNavigatePrevious(nodeChange: StNodeTreeChange): void {
      console.log('navigate previous', nodeChange);
   }

   onUpdateNodes(): void {
      this.forceNodeValidations = true;
      if (this.nodeForm.valid) {
         const nodeA: StNodeTree = _cloneDeep(this.treeA.children[0]);
         const nodeB: StNodeTree = _cloneDeep(this.treeB.children[0]);
         nodeA.name = nodeB.name = this.nodeModel.name = this.nodeForm.value.name;
         this.nodeModel.path = this.nodeForm.value.path;
         _set(this.treeA, this.nodeModel.path, nodeA);
         _set(this.treeB, this.nodeModel.path, nodeB);
         this.subject.next({ node: nodeA, path: this.nodeModel.path });
         this.subject.next({ node: nodeB, path: this.nodeModel.path });
      }
   }

   onGenerateTrees(): void {
      this.forceTreeValidations = true;
      if (this.treeForm.valid) {
         this.treeModel.levels = this.treeForm.value.levels;
         this.treeModel.nodes = this.treeForm.value.nodes;
         this.treeModel.max = this.treeForm.value.max || undefined;
         this.treeModel.name = this.treeForm.value.name;
         this.treeA = this.generateTree(this.treeModel.levels, this.treeModel.nodes, this.treeModel.name, 0);
         this.treeB = _cloneDeep(this.treeA);
      }
   }

   private generateNode(name: string, children?: StNodeTree[]): StNodeTree {
      return children ? { name: name, icon: 'icon-folder', expanded: true, children: children } : { name: name, icon: 'icon-file' };
   }

   private generateTree(levels: number, levelNodes: number, nodeName: string, startNode: number): StNodeTree {
      let childNodes: StNodeTree[];
      if (levels > 0) {
         childNodes = [];
         for (let i: number = 0; i < levelNodes; i++) {
            // Only generate childrens for the first child
            childNodes.push(this.generateTree(i === 0 ? levels - 1 : 0, levelNodes, `${nodeName} (${startNode}.${i})`, startNode + 1));
         }
      }
      return this.generateNode(nodeName, childNodes);
   }
}

export interface TreeModel {
   levels: number;
   nodes: number;
   max: number;
   name: string;
}

export interface NodeModel {
   name: string;
   path: string;
}
