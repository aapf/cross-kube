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
import V1ObjectMeta from './V1ObjectMeta'
import V1alpha1PriorityLevelConfigurationSpec from './V1alpha1PriorityLevelConfigurationSpec'
import V1alpha1PriorityLevelConfigurationStatus from './V1alpha1PriorityLevelConfigurationStatus'

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 * @export
 * @interface V1alpha1PriorityLevelConfiguration
 */
export default interface V1alpha1PriorityLevelConfiguration extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfiguration
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1alpha1PriorityLevelConfiguration
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1alpha1PriorityLevelConfiguration
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1alpha1PriorityLevelConfigurationSpec}
   * @memberof V1alpha1PriorityLevelConfiguration
   */
  spec?: V1alpha1PriorityLevelConfigurationSpec

  /**
   *
   * @type {V1alpha1PriorityLevelConfigurationStatus}
   * @memberof V1alpha1PriorityLevelConfiguration
   */
  status?: V1alpha1PriorityLevelConfigurationStatus
}