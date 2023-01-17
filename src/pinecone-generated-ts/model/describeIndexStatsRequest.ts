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

/**
* The request for the `DescribeIndexStats` operation.
*/
export class DescribeIndexStatsRequest {
    /**
    * If this parameter is present, the operation only returns statistics for vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/.
    */
    'filter'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return DescribeIndexStatsRequest.attributeTypeMap;
    }
}
