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
import V1ScopedResourceSelectorRequirement from './V1ScopedResourceSelectorRequirement'

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 * @export
 * @interface V1ScopeSelector
 */
export default interface V1ScopeSelector extends KubeObject {
  /**
   * A list of scope selector requirements by scope of the resources.
   * @type {Array<V1ScopedResourceSelectorRequirement>}
   * @memberof V1ScopeSelector
   */
  matchExpressions?: Array<V1ScopedResourceSelectorRequirement>
}
