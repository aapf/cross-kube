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
import V1ScopeSelector from './V1ScopeSelector'

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 * @export
 * @interface V1ResourceQuotaSpec
 */
export default interface V1ResourceQuotaSpec extends KubeObject {
  /**
   * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
   * @type {{ [key: string]: string; }}
   * @memberof V1ResourceQuotaSpec
   */
  hard?: { [key: string]: string }

  /**
   *
   * @type {V1ScopeSelector}
   * @memberof V1ResourceQuotaSpec
   */
  scopeSelector?: V1ScopeSelector

  /**
   * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
   * @type {Array<string>}
   * @memberof V1ResourceQuotaSpec
   */
  scopes?: Array<string>
}
