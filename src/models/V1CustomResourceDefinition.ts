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
import V1CustomResourceDefinitionSpec from './V1CustomResourceDefinitionSpec'
import V1CustomResourceDefinitionStatus from './V1CustomResourceDefinitionStatus'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 * @export
 * @interface V1CustomResourceDefinition
 */
export default interface V1CustomResourceDefinition extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1CustomResourceDefinition
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1CustomResourceDefinition
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1CustomResourceDefinition
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1CustomResourceDefinitionSpec}
   * @memberof V1CustomResourceDefinition
   */
  spec: V1CustomResourceDefinitionSpec

  /**
   *
   * @type {V1CustomResourceDefinitionStatus}
   * @memberof V1CustomResourceDefinition
   */
  status?: V1CustomResourceDefinitionStatus
}
