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
import V1beta1CustomResourceColumnDefinition from './V1beta1CustomResourceColumnDefinition'
import V1beta1CustomResourceConversion from './V1beta1CustomResourceConversion'
import V1beta1CustomResourceDefinitionNames from './V1beta1CustomResourceDefinitionNames'
import V1beta1CustomResourceDefinitionVersion from './V1beta1CustomResourceDefinitionVersion'
import V1beta1CustomResourceSubresources from './V1beta1CustomResourceSubresources'
import V1beta1CustomResourceValidation from './V1beta1CustomResourceValidation'

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 * @export
 * @interface V1beta1CustomResourceDefinitionSpec
 */
export default interface V1beta1CustomResourceDefinitionSpec extends KubeObject {
  /**
   * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive.
   * @type {Array<V1beta1CustomResourceColumnDefinition>}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  additionalPrinterColumns?: Array<V1beta1CustomResourceColumnDefinition>

  /**
   *
   * @type {V1beta1CustomResourceConversion}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  conversion?: V1beta1CustomResourceConversion

  /**
   * Group is the group this resource belongs in
   * @type {string}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  group: string

  /**
   *
   * @type {V1beta1CustomResourceDefinitionNames}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  names: V1beta1CustomResourceDefinitionNames

  /**
   * Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced
   * @type {string}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  scope: string

  /**
   *
   * @type {V1beta1CustomResourceSubresources}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  subresources?: V1beta1CustomResourceSubresources

  /**
   *
   * @type {V1beta1CustomResourceValidation}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  validation?: V1beta1CustomResourceValidation

  /**
   * Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`.
   * @type {string}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  version?: string

  /**
   * Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
   * @type {Array<V1beta1CustomResourceDefinitionVersion>}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  versions?: Array<V1beta1CustomResourceDefinitionVersion>
}