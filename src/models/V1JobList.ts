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
import V1Job from './V1Job'
import V1ListMeta from './V1ListMeta'

/**
 * JobList is a collection of jobs.
 * @export
 * @interface V1JobList
 */
export default interface V1JobList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1JobList
   */
  apiVersion?: string

  /**
   * items is the list of Jobs.
   * @type {Array<V1Job>}
   * @memberof V1JobList
   */
  items: Array<V1Job>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1JobList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1JobList
   */
  metadata?: V1ListMeta
}
