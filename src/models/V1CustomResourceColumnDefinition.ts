/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'

/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 * @export
 * @interface V1CustomResourceColumnDefinition
 */
export default interface V1CustomResourceColumnDefinition extends KubeObject {
  /**
   * description is a human readable description of this column.
   * @type {string}
   * @memberof V1CustomResourceColumnDefinition
   */
  description?: string

  /**
   * format is an optional OpenAPI type definition for this column. The \'name\' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
   * @type {string}
   * @memberof V1CustomResourceColumnDefinition
   */
  format?: string

  /**
   * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
   * @type {string}
   * @memberof V1CustomResourceColumnDefinition
   */
  jsonPath: string

  /**
   * name is a human readable name for the column.
   * @type {string}
   * @memberof V1CustomResourceColumnDefinition
   */
  name: string

  /**
   * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
   * @type {number}
   * @memberof V1CustomResourceColumnDefinition
   */
  priority?: number

  /**
   * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
   * @type {string}
   * @memberof V1CustomResourceColumnDefinition
   */
  type: string
}
