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
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 * @export
 * @interface V1alpha1PriorityLevelConfigurationCondition
 */
export default interface V1alpha1PriorityLevelConfigurationCondition extends KubeObject {
  /**
   * `lastTransitionTime` is the last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1alpha1PriorityLevelConfigurationCondition
   */
  lastTransitionTime?: Date

  /**
   * `message` is a human-readable message indicating details about last transition.
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfigurationCondition
   */
  message?: string

  /**
   * `reason` is a unique, one-word, CamelCase reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfigurationCondition
   */
  reason?: string

  /**
   * `status` is the status of the condition. Can be True, False, Unknown. Required.
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfigurationCondition
   */
  status?: string

  /**
   * `type` is the type of the condition. Required.
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfigurationCondition
   */
  type?: string
}