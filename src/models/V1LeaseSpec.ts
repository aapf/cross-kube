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

/**
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface V1LeaseSpec
 */
export default interface V1LeaseSpec extends KubeObject {
  /**
   * acquireTime is a time when the current lease was acquired.
   * @type {Date}
   * @memberof V1LeaseSpec
   */
  acquireTime?: Date

  /**
   * holderIdentity contains the identity of the holder of a current lease.
   * @type {string}
   * @memberof V1LeaseSpec
   */
  holderIdentity?: string

  /**
   * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
   * @type {number}
   * @memberof V1LeaseSpec
   */
  leaseDurationSeconds?: number

  /**
   * leaseTransitions is the number of transitions of a lease between holders.
   * @type {number}
   * @memberof V1LeaseSpec
   */
  leaseTransitions?: number

  /**
   * renewTime is a time when the current holder of a lease has last updated the lease.
   * @type {Date}
   * @memberof V1LeaseSpec
   */
  renewTime?: Date
}