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
import V1alpha1QueuingConfiguration from './V1alpha1QueuingConfiguration'

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 * @export
 * @interface V1alpha1LimitResponse
 */
export default interface V1alpha1LimitResponse extends KubeObject {
  /**
   *
   * @type {V1alpha1QueuingConfiguration}
   * @memberof V1alpha1LimitResponse
   */
  queuing?: V1alpha1QueuingConfiguration

  /**
   * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
   * @type {string}
   * @memberof V1alpha1LimitResponse
   */
  type: string
}