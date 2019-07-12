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
import V2beta2MetricIdentifier from './V2beta2MetricIdentifier'
import V2beta2MetricTarget from './V2beta2MetricTarget'

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 * @export
 * @interface V2beta2ExternalMetricSource
 */
export default interface V2beta2ExternalMetricSource extends KubeObject {
  /**
   *
   * @type {V2beta2MetricIdentifier}
   * @memberof V2beta2ExternalMetricSource
   */
  metric: V2beta2MetricIdentifier

  /**
   *
   * @type {V2beta2MetricTarget}
   * @memberof V2beta2ExternalMetricSource
   */
  target: V2beta2MetricTarget
}