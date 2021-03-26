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
import V1RoleRef from './V1RoleRef'
import V1Subject from './V1Subject'

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 * @export
 * @interface V1RoleBinding
 */
export default interface V1RoleBinding extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1RoleBinding
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1RoleBinding
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1RoleBinding
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1RoleRef}
   * @memberof V1RoleBinding
   */
  roleRef: V1RoleRef

  /**
   * Subjects holds references to the objects the role applies to.
   * @type {Array<V1Subject>}
   * @memberof V1RoleBinding
   */
  subjects?: Array<V1Subject>
}
