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
import V1beta1CertificateSigningRequestCondition from './V1beta1CertificateSigningRequestCondition'

/**
 *
 * @export
 * @interface V1beta1CertificateSigningRequestStatus
 */
export default interface V1beta1CertificateSigningRequestStatus extends KubeObject {
  /**
   * If request was approved, the controller will place the issued certificate here.
   * @type {string}
   * @memberof V1beta1CertificateSigningRequestStatus
   */
  certificate?: string

  /**
   * Conditions applied to the request, such as approval or denial.
   * @type {Array<V1beta1CertificateSigningRequestCondition>}
   * @memberof V1beta1CertificateSigningRequestStatus
   */
  conditions?: Array<V1beta1CertificateSigningRequestCondition>
}
