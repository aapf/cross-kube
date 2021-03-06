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
import V2beta1CrossVersionObjectReference from './V2beta1CrossVersionObjectReference'

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 * @export
 * @interface V2beta1ObjectMetricSource
 */
export default interface V2beta1ObjectMetricSource extends KubeObject {
  /**
   * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   * @type {string}
   * @memberof V2beta1ObjectMetricSource
   */
  averageValue?: string

  /**
   * metricName is the name of the metric in question.
   * @type {string}
   * @memberof V2beta1ObjectMetricSource
   */
  metricName: string

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V2beta1ObjectMetricSource
   */
  selector?: V1LabelSelector

  /**
   *
   * @type {V2beta1CrossVersionObjectReference}
   * @memberof V2beta1ObjectMetricSource
   */
  target: V2beta1CrossVersionObjectReference

  /**
   * targetValue is the target value of the metric (as a quantity).
   * @type {string}
   * @memberof V2beta1ObjectMetricSource
   */
  targetValue: string
}
