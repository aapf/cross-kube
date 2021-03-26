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
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 * @export
 * @interface V1Preconditions
 */
export default interface V1Preconditions extends KubeObject {
  /**
   * Specifies the target ResourceVersion
   * @type {string}
   * @memberof V1Preconditions
   */
  resourceVersion?: string

  /**
   * Specifies the target UID.
   * @type {string}
   * @memberof V1Preconditions
   */
  uid?: string
}
