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
import V1beta1PodSecurityPolicySpec from './V1beta1PodSecurityPolicySpec'

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 * @export
 * @interface V1beta1PodSecurityPolicy
 */
export default interface V1beta1PodSecurityPolicy extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1PodSecurityPolicy
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1PodSecurityPolicy
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1PodSecurityPolicy
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta1PodSecurityPolicySpec}
   * @memberof V1beta1PodSecurityPolicy
   */
  spec?: V1beta1PodSecurityPolicySpec
}
