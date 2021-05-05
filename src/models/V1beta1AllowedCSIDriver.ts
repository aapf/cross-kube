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
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 * @export
 * @interface V1beta1AllowedCSIDriver
 */
export default interface V1beta1AllowedCSIDriver extends KubeObject {
  /**
   * Name is the registered name of the CSI driver
   * @type {string}
   * @memberof V1beta1AllowedCSIDriver
   */
  name: string
}