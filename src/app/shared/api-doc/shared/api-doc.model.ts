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

export class ApiDoc {
   title: string;
   description: string;
   apiSection: Api;
   modelSection?: Models;
   exampleDesc: string;
   haveModel: boolean;
}

export interface Api {
   description?: string;
   inputs: Array<ApiRow>;
   outputs: Array<ApiRow>;
}

export interface ApiRow {
   paramName: string;
   type: TYPES | string;
   required: boolean;
   deprecated?: boolean;
   details: string;
}

export interface Models {
   title: string;
   models: Array<any>;
}

export enum TYPES {STR, NUM, OBJ, BOOL, ANY, ARRAY_STR, ARRAY_NUM, ARRAY_OBJ, ARRAY_BOOL, ARRAY_ANY, FUNC}
