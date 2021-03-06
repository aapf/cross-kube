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
 * NamespaceCondition contains details about state of namespace.
 * @export
 * @interface V1NamespaceCondition
 */
export default interface V1NamespaceCondition extends KubeObject {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {Date}
   * @memberof V1NamespaceCondition
   */
  lastTransitionTime?: Date

  /**
   *
   * @type {string}
   * @memberof V1NamespaceCondition
   */
  message?: string

  /**
   *
   * @type {string}
   * @memberof V1NamespaceCondition
   */
  reason?: string

  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof V1NamespaceCondition
   */
  status: string

  /**
   * Type of namespace controller condition.
   * @type {string}
   * @memberof V1NamespaceCondition
   */
  type: string
}
