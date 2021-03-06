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
import V1NamespaceCondition from './V1NamespaceCondition'

/**
 * NamespaceStatus is information about the current status of a Namespace.
 * @export
 * @interface V1NamespaceStatus
 */
export default interface V1NamespaceStatus extends KubeObject {
  /**
   * Represents the latest available observations of a namespace\'s current state.
   * @type {Array<V1NamespaceCondition>}
   * @memberof V1NamespaceStatus
   */
  conditions?: Array<V1NamespaceCondition>

  /**
   * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   * @type {string}
   * @memberof V1NamespaceStatus
   */
  phase?: string
}
