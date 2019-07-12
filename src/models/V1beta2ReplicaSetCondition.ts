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
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 * @export
 * @interface V1beta2ReplicaSetCondition
 */
export default interface V1beta2ReplicaSetCondition extends KubeObject {
  /**
   * The last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1beta2ReplicaSetCondition
   */
  lastTransitionTime?: Date

  /**
   * A human readable message indicating details about the transition.
   * @type {string}
   * @memberof V1beta2ReplicaSetCondition
   */
  message?: string

  /**
   * The reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1beta2ReplicaSetCondition
   */
  reason?: string

  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof V1beta2ReplicaSetCondition
   */
  status: string

  /**
   * Type of replica set condition.
   * @type {string}
   * @memberof V1beta2ReplicaSetCondition
   */
  type: string
}