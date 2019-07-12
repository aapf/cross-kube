// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 * @export
 * @interface V1beta2StatefulSetCondition
 */
export default interface V1beta2StatefulSetCondition extends KubeObject {
  /**
   * Last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1beta2StatefulSetCondition
   */
  lastTransitionTime?: Date

  /**
   * A human readable message indicating details about the transition.
   * @type {string}
   * @memberof V1beta2StatefulSetCondition
   */
  message?: string

  /**
   * The reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1beta2StatefulSetCondition
   */
  reason?: string

  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof V1beta2StatefulSetCondition
   */
  status: string

  /**
   * Type of statefulset condition.
   * @type {string}
   * @memberof V1beta2StatefulSetCondition
   */
  type: string
}