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
import V1Toleration from './V1Toleration'

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 * @export
 * @interface V1alpha1Scheduling
 */
export default interface V1alpha1Scheduling extends KubeObject {
  /**
   * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod\'s existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
   * @type {{ [key: string]: string; }}
   * @memberof V1alpha1Scheduling
   */
  nodeSelector?: { [key: string]: string }

  /**
   * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
   * @type {Array<V1Toleration>}
   * @memberof V1alpha1Scheduling
   */
  tolerations?: Array<V1Toleration>
}