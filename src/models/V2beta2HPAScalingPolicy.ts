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
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 * @export
 * @interface V2beta2HPAScalingPolicy
 */
export default interface V2beta2HPAScalingPolicy extends KubeObject {
  /**
   * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
   * @type {number}
   * @memberof V2beta2HPAScalingPolicy
   */
  periodSeconds: number

  /**
   * Type is used to specify the scaling policy.
   * @type {string}
   * @memberof V2beta2HPAScalingPolicy
   */
  type: string

  /**
   * Value contains the amount of change which is permitted by the policy. It must be greater than zero
   * @type {number}
   * @memberof V2beta2HPAScalingPolicy
   */
  value: number
}