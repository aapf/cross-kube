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
import V1RollingUpdateDaemonSet from './V1RollingUpdateDaemonSet'

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 * @export
 * @interface V1DaemonSetUpdateStrategy
 */
export default interface V1DaemonSetUpdateStrategy extends KubeObject {
  /**
   *
   * @type {V1RollingUpdateDaemonSet}
   * @memberof V1DaemonSetUpdateStrategy
   */
  rollingUpdate?: V1RollingUpdateDaemonSet

  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
   * @type {string}
   * @memberof V1DaemonSetUpdateStrategy
   */
  type?: string
}
