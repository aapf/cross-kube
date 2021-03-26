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
import V1beta1JobTemplateSpec from './V1beta1JobTemplateSpec'

/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 * @export
 * @interface V1beta1CronJobSpec
 */
export default interface V1beta1CronJobSpec extends KubeObject {
  /**
   * Specifies how to treat concurrent executions of a Job. Valid values are: - \"Allow\" (default): allows CronJobs to run concurrently; - \"Forbid\": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - \"Replace\": cancels currently running job and replaces it with a new one
   * @type {string}
   * @memberof V1beta1CronJobSpec
   */
  concurrencyPolicy?: string

  /**
   * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @type {number}
   * @memberof V1beta1CronJobSpec
   */
  failedJobsHistoryLimit?: number

  /**
   *
   * @type {V1beta1JobTemplateSpec}
   * @memberof V1beta1CronJobSpec
   */
  jobTemplate: V1beta1JobTemplateSpec

  /**
   * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
   * @type {string}
   * @memberof V1beta1CronJobSpec
   */
  schedule: string

  /**
   * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
   * @type {number}
   * @memberof V1beta1CronJobSpec
   */
  startingDeadlineSeconds?: number

  /**
   * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3.
   * @type {number}
   * @memberof V1beta1CronJobSpec
   */
  successfulJobsHistoryLimit?: number

  /**
   * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
   * @type {boolean}
   * @memberof V1beta1CronJobSpec
   */
  suspend?: boolean
}
