/**
 * Uber API
 * Move your app forward with the Uber API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Activities {
    /**
     * Position in pagination.
     */
    offset?: number;

    /**
     * Number of items to retrieve (100 max).
     */
    limit?: number;

    /**
     * Total number of items available.
     */
    count?: number;

    history?: Array<models.Activity>;

}