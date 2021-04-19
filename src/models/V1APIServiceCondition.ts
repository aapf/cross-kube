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
 * APIServiceCondition describes the state of an APIService at a particular point
 * @export
 * @interface V1APIServiceCondition
 */
export default interface V1APIServiceCondition extends KubeObject {
  /**
   * Last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1APIServiceCondition
   */
  lastTransitionTime?: Date

  /**
   * Human-readable message indicating details about last transition.
   * @type {string}
   * @memberof V1APIServiceCondition
   */
  message?: string

  /**
   * Unique, one-word, CamelCase reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1APIServiceCondition
   */
  reason?: string

  /**
   * Status is the status of the condition. Can be True, False, Unknown.
   * @type {string}
   * @memberof V1APIServiceCondition
   */
  status: string

  /**
   * Type is the type of the condition.
   * @type {string}
   * @memberof V1APIServiceCondition
   */
  type: string
}
