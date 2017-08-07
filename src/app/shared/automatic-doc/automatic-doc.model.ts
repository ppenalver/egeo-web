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
