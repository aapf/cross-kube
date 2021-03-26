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
import V1Handler from './V1Handler'

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 * @export
 * @interface V1Lifecycle
 */
export default interface V1Lifecycle extends KubeObject {
  /**
   *
   * @type {V1Handler}
   * @memberof V1Lifecycle
   */
  postStart?: V1Handler

  /**
   *
   * @type {V1Handler}
   * @memberof V1Lifecycle
   */
  preStop?: V1Handler
}
