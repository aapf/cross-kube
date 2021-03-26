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
import V1PodAffinityTerm from './V1PodAffinityTerm'

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 * @export
 * @interface V1WeightedPodAffinityTerm
 */
export default interface V1WeightedPodAffinityTerm extends KubeObject {
  /**
   *
   * @type {V1PodAffinityTerm}
   * @memberof V1WeightedPodAffinityTerm
   */
  podAffinityTerm: V1PodAffinityTerm

  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @type {number}
   * @memberof V1WeightedPodAffinityTerm
   */
  weight: number
}
