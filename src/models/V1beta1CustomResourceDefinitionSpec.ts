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
   * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If present, this field configures columns for all versions. Top-level and per-version columns are mutually exclusive. If no top-level or per-version columns are specified, a single column displaying the age of the custom resource is used.
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
   * group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
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
   * preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. If false, schemas must be defined for all versions. Defaults to true in v1beta for backwards compatibility. Deprecated: will be required to be false in v1. Preservation of unknown fields can be specified in the validation schema using the `x-kubernetes-preserve-unknown-fields: true` extension. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details.
   * @type {boolean}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  preserveUnknownFields?: boolean

  /**
   * scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`. Default is `Namespaced`.
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
   * version is the API version of the defined custom resource. The custom resources are served under `/apis/<group>/<version>/...`. Must match the name of the first item in the `versions` list if `version` and `versions` are both specified. Optional if `versions` is specified. Deprecated: use `versions` instead.
   * @type {string}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  version?: string

  /**
   * versions is the list of all API versions of the defined custom resource. Optional if `version` is specified. The name of the first item in the `versions` list must match the `version` field if `version` and `versions` are both specified. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
   * @type {Array<V1beta1CustomResourceDefinitionVersion>}
   * @memberof V1beta1CustomResourceDefinitionSpec
   */
  versions?: Array<V1beta1CustomResourceDefinitionVersion>
}
