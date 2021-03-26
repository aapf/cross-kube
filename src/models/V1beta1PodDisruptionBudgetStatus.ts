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
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 * @export
 * @interface V1beta1PodDisruptionBudgetStatus
 */
export default interface V1beta1PodDisruptionBudgetStatus extends KubeObject {
  /**
   * current number of healthy pods
   * @type {number}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  currentHealthy: number

  /**
   * minimum desired number of healthy pods
   * @type {number}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  desiredHealthy: number

  /**
   * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn\'t occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
   * @type {{ [key: string]: Date; }}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  disruptedPods?: { [key: string]: Date }

  /**
   * Number of pod disruptions that are currently allowed.
   * @type {number}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  disruptionsAllowed: number

  /**
   * total number of pods counted by this disruption budget
   * @type {number}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  expectedPods: number

  /**
   * Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB\'s object generation.
   * @type {number}
   * @memberof V1beta1PodDisruptionBudgetStatus
   */
  observedGeneration?: number
}
