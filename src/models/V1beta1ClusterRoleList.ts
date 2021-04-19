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
import V1beta1ClusterRole from './V1beta1ClusterRole'

/**
 * ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22.
 * @export
 * @interface V1beta1ClusterRoleList
 */
export default interface V1beta1ClusterRoleList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1ClusterRoleList
   */
  apiVersion?: string

  /**
   * Items is a list of ClusterRoles
   * @type {Array<V1beta1ClusterRole>}
   * @memberof V1beta1ClusterRoleList
   */
  items: Array<V1beta1ClusterRole>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1ClusterRoleList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1beta1ClusterRoleList
   */
  metadata?: V1ListMeta
}
