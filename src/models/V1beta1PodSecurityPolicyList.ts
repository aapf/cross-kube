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
import V1ListMeta from './V1ListMeta'
import V1beta1PodSecurityPolicy from './V1beta1PodSecurityPolicy'

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 * @export
 * @interface V1beta1PodSecurityPolicyList
 */
export default interface V1beta1PodSecurityPolicyList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1PodSecurityPolicyList
   */
  apiVersion?: string

  /**
   * items is a list of schema objects.
   * @type {Array<V1beta1PodSecurityPolicy>}
   * @memberof V1beta1PodSecurityPolicyList
   */
  items: Array<V1beta1PodSecurityPolicy>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1PodSecurityPolicyList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1beta1PodSecurityPolicyList
   */
  metadata?: V1ListMeta
}