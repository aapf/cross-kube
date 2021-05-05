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
 * PriorityLevelConfigurationReference contains information that points to the \"request-priority\" being used.
 * @export
 * @interface V1alpha1PriorityLevelConfigurationReference
 */
export default interface V1alpha1PriorityLevelConfigurationReference extends KubeObject {
  /**
   * `name` is the name of the priority level configuration being referenced Required.
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfigurationReference
   */
  name: string
}