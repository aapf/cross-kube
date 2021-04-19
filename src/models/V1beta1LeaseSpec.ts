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
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface V1beta1LeaseSpec
 */
export default interface V1beta1LeaseSpec extends KubeObject {
  /**
   * acquireTime is a time when the current lease was acquired.
   * @type {Date}
   * @memberof V1beta1LeaseSpec
   */
  acquireTime?: Date

  /**
   * holderIdentity contains the identity of the holder of a current lease.
   * @type {string}
   * @memberof V1beta1LeaseSpec
   */
  holderIdentity?: string

  /**
   * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
   * @type {number}
   * @memberof V1beta1LeaseSpec
   */
  leaseDurationSeconds?: number

  /**
   * leaseTransitions is the number of transitions of a lease between holders.
   * @type {number}
   * @memberof V1beta1LeaseSpec
   */
  leaseTransitions?: number

  /**
   * renewTime is a time when the current holder of a lease has last updated the lease.
   * @type {Date}
   * @memberof V1beta1LeaseSpec
   */
  renewTime?: Date
}
