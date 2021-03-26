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
 * BoundObjectReference is a reference to an object that a token is bound to.
 * @export
 * @interface V1BoundObjectReference
 */
export default interface V1BoundObjectReference extends KubeObject {
  /**
   * API version of the referent.
   * @type {string}
   * @memberof V1BoundObjectReference
   */
  apiVersion?: string

  /**
   * Kind of the referent. Valid kinds are \'Pod\' and \'Secret\'.
   * @type {string}
   * @memberof V1BoundObjectReference
   */
  kind?: string

  /**
   * Name of the referent.
   * @type {string}
   * @memberof V1BoundObjectReference
   */
  name?: string

  /**
   * UID of the referent.
   * @type {string}
   * @memberof V1BoundObjectReference
   */
  uid?: string
}
