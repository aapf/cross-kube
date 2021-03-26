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
import V1NodeAffinity from './V1NodeAffinity'
import V1PodAffinity from './V1PodAffinity'
import V1PodAntiAffinity from './V1PodAntiAffinity'

/**
 * Affinity is a group of affinity scheduling rules.
 * @export
 * @interface V1Affinity
 */
export default interface V1Affinity extends KubeObject {
  /**
   *
   * @type {V1NodeAffinity}
   * @memberof V1Affinity
   */
  nodeAffinity?: V1NodeAffinity

  /**
   *
   * @type {V1PodAffinity}
   * @memberof V1Affinity
   */
  podAffinity?: V1PodAffinity

  /**
   *
   * @type {V1PodAntiAffinity}
   * @memberof V1Affinity
   */
  podAntiAffinity?: V1PodAntiAffinity
}
