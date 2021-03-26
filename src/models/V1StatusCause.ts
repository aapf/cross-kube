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
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 * @export
 * @interface V1StatusCause
 */
export default interface V1StatusCause extends KubeObject {
  /**
   * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.  Examples:   \"name\" - the field \"name\" on the current resource   \"items[0].name\" - the field \"name\" on the first array entry in \"items\"
   * @type {string}
   * @memberof V1StatusCause
   */
  field?: string

  /**
   * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
   * @type {string}
   * @memberof V1StatusCause
   */
  message?: string

  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   * @type {string}
   * @memberof V1StatusCause
   */
  reason?: string
}
