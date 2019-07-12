// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 * @export
 * @interface V1PriorityClass
 */
export default interface V1PriorityClass extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1PriorityClass
   */
  apiVersion?: string

  /**
   * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
   * @type {string}
   * @memberof V1PriorityClass
   */
  description?: string

  /**
   * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
   * @type {boolean}
   * @memberof V1PriorityClass
   */
  globalDefault?: boolean

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1PriorityClass
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1PriorityClass
   */
  metadata?: V1ObjectMeta

  /**
   * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
   * @type {number}
   * @memberof V1PriorityClass
   */
  value: number
}