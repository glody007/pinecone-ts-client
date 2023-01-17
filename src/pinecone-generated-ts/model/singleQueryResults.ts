/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ScoredVector } from './scoredVector';

export class SingleQueryResults {
    /**
    * The matches for the vectors.
    */
    'matches'?: Array<ScoredVector>;
    /**
    * The namespace for the vectors.
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<ScoredVector>"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SingleQueryResults.attributeTypeMap;
    }
}
