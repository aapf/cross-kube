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
import V1LabelSelector from './V1LabelSelector'

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2beta1PodsMetricStatus
 */
export default interface V2beta1PodsMetricStatus extends KubeObject {
  /**
   * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
   * @type {string}
   * @memberof V2beta1PodsMetricStatus
   */
  currentAverageValue: string

  /**
   * metricName is the name of the metric in question
   * @type {string}
   * @memberof V2beta1PodsMetricStatus
   */
  metricName: string

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V2beta1PodsMetricStatus
   */
  selector?: V1LabelSelector
}
