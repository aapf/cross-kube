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
import V2beta2MetricIdentifier from './V2beta2MetricIdentifier'
import V2beta2MetricValueStatus from './V2beta2MetricValueStatus'

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 * @export
 * @interface V2beta2PodsMetricStatus
 */
export default interface V2beta2PodsMetricStatus extends KubeObject {
  /**
   *
   * @type {V2beta2MetricValueStatus}
   * @memberof V2beta2PodsMetricStatus
   */
  current: V2beta2MetricValueStatus

  /**
   *
   * @type {V2beta2MetricIdentifier}
   * @memberof V2beta2PodsMetricStatus
   */
  metric: V2beta2MetricIdentifier
}
