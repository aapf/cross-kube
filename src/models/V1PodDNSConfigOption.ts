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
 * PodDNSConfigOption defines DNS resolver options of a pod.
 * @export
 * @interface V1PodDNSConfigOption
 */
export default interface V1PodDNSConfigOption extends KubeObject {
  /**
   * Required.
   * @type {string}
   * @memberof V1PodDNSConfigOption
   */
  name?: string

  /**
   *
   * @type {string}
   * @memberof V1PodDNSConfigOption
   */
  value?: string
}
