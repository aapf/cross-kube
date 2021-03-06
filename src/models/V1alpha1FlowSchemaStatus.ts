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
import V1alpha1FlowSchemaCondition from './V1alpha1FlowSchemaCondition'

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 * @export
 * @interface V1alpha1FlowSchemaStatus
 */
export default interface V1alpha1FlowSchemaStatus extends KubeObject {
  /**
   * `conditions` is a list of the current states of FlowSchema.
   * @type {Array<V1alpha1FlowSchemaCondition>}
   * @memberof V1alpha1FlowSchemaStatus
   */
  conditions?: Array<V1alpha1FlowSchemaCondition>
}
