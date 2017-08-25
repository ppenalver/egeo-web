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

export class Documentation {
   id: string;
   title: string;
   type: string;
   description: string;
   api: DocumentationApi;
   example: CodeApi[];
   model: CodeApi[];
}

export class CodeApi {
   type: string;
   code: string;
   title: string;
   desc: string;
}

export class DocumentationApi {
   description: string;
   inputs: DocumentationApiProperty[];
   outputs: DocumentationApiProperty[];
}

export class DocumentationApiProperty {
   name: string;
   type: string;
   defaultValue: string;
   required: boolean;
   description: string;
}
