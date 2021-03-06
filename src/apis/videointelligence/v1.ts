/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace videointelligence_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Cloud Video Intelligence API
   *
   * Cloud Video Intelligence API.
   *
   * @example
   * const {google} = require('googleapis');
   * const videointelligence = google.videointelligence('v1');
   *
   * @namespace videointelligence
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Videointelligence
   */
  export class Videointelligence {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    operations: Resource$Operations;
    videos: Resource$Videos;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.operations = new Resource$Operations(this);
      this.videos = new Resource$Videos(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults[];
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_LabelAnnotation {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
    /**
     * Where the label was detected and with what confidence.
     */
    locations?: Schema$GoogleCloudVideointelligenceV1beta1_LabelLocation[];
  }
  /**
   * Label location.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_LabelLocation {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Label level.
     */
    level?: string;
    /**
     * Video segment. Set to [-1, -1] for video-level labels. Set to [timestamp,
     * timestamp] for frame-level labels. Otherwise, corresponds to one of
     * `AnnotateSpec.segments` (if specified) or to shot boundaries (if
     * requested).
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta1_VideoSegment;
  }
  /**
   * Safe search annotation (based on per-frame visual signals only). If no
   * unsafe content has been detected in a frame, no annotations are present for
   * that frame. If only some types of unsafe content have been detected in a
   * frame, the likelihood is set to `UNKNOWN` for all other types of unsafe
   * content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation {
    /**
     * Likelihood of adult content.
     */
    adult?: string;
    /**
     * Likelihood of medical content.
     */
    medical?: string;
    /**
     * Likelihood of racy content.
     */
    racy?: string;
    /**
     * Likelihood that an obvious modification was made to the original version
     * to make it appear funny or offensive.
     */
    spoof?: string;
    /**
     * Video time offset in microseconds.
     */
    timeOffset?: string;
    /**
     * Likelihood of violent content.
     */
    violent?: string;
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress {
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when
     * fully processed.
     */
    progressPercent?: number;
    /**
     * Time when the request was received.
     */
    startTime?: string;
    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations. There is exactly one element for each unique label.
     */
    labelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta1_LabelAnnotation[];
    /**
     * Safe search annotations.
     */
    safeSearchAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1beta1_VideoSegment[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta1_VideoSegment {
    /**
     * End offset in microseconds (inclusive). Unset means 0.
     */
    endTimeOffset?: string;
    /**
     * Start offset in microseconds (inclusive). Unset means 0.
     */
    startTimeOffset?: string;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[];
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[];
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1beta2_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1beta2_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment[];
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Output only. Approximate percentage processed thus far. Guaranteed to be
     * 100 when fully processed.
     */
    progressPercent?: number;
    /**
     * Output only. Time when the request was received.
     */
    startTime?: string;
    /**
     * Output only. Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {
    /**
     * Output only. Non-streaming error only. If set, indicates an error. Note
     * that for a single `AnnotateVideoRequest` some videos may succeed and some
     * may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults[];
  }
  /**
   * Emotion attribute.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_EmotionAttribute {
    /**
     * Emotion entry.
     */
    emotion?: string;
    /**
     * Confidence score.
     */
    score?: number;
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame[];
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Face detection annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation {
    /**
     * All video frames where a face was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionFrame[];
    /**
     * All video segments where a face was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_FaceSegment[];
  }
  /**
   * Face detection attribute.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAttribute {
    /**
     * Emotion attributes.
     */
    emotions?: Schema$GoogleCloudVideointelligenceV1p1beta1_EmotionAttribute[];
    /**
     * Normalized Bounding box.
     */
    normalizedBoundingBox?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox;
  }
  /**
   * Video frame level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionFrame {
    /**
     * Face attributes in a frame. There can be more than one attributes if the
     * same face is detected in multiple locations within the current frame.
     */
    attributes?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAttribute[];
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for face detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_FaceSegment {
    /**
     * Video segment where a face was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment[];
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * Normalized bounding box. The normalized vertex coordinates are relative to
   * the original image. Range: [0, 1].
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox {
    /**
     * Bottom Y coordinate.
     */
    bottom?: number;
    /**
     * Left X coordinate.
     */
    left?: number;
    /**
     * Right X coordinate.
     */
    right?: number;
    /**
     * Top Y coordinate.
     */
    top?: number;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number
     * indicates an estimated greater likelihood that the recognized words are
     * correct. This field is typically provided only for the top hypothesis,
     * and only for `is_final=true` results. Clients should not rely on the
     * `confidence` field as it is not guaranteed to be accurate or consistent.
     * The default of 0.0 is a sentinel value indicating `confidence` was not
     * set.
     */
    confidence?: number;
    /**
     * Output only. Transcript text representing the words that the user spoke.
     */
    transcript?: string;
    /**
     * Output only. A list of word-specific information for each recognized
     * word.
     */
    words?: Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription {
    /**
     * Output only. May contain one or more recognition hypotheses (up to the
     * maximum specified in `max_alternatives`). These alternatives are ordered
     * in terms of accuracy, with the top (first) alternative being the most
     * probable, as ranked by the recognizer.
     */
    alternatives?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress {
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Output only. Approximate percentage processed thus far. Guaranteed to be
     * 100 when fully processed.
     */
    progressPercent?: number;
    /**
     * Output only. Time when the request was received.
     */
    startTime?: string;
    /**
     * Output only. Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults {
    /**
     * Output only. Non-streaming error only. If set, indicates an error. Note
     * that for a single `AnnotateVideoRequest` some videos may succeed and some
     * may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation;
    /**
     * Face detection annotations.
     */
    faceDetectionAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation[];
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * Word-specific information for recognized words. Word information is only
   * included in the response when certain request parameters are set, such as
   * `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo {
    /**
     * Output only. Time offset relative to the beginning of the audio, and
     * corresponding to the end of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string;
    /**
     * Output only. Time offset relative to the beginning of the audio, and
     * corresponding to the start of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string;
    /**
     * Output only. The word corresponding to this set of information.
     */
    word?: string;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation request.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoRequest {
    /**
     * Requested video annotation features.
     */
    features?: string[];
    /**
     * The video data bytes. If unset, the input video(s) should be specified
     * via `input_uri`. If set, `input_uri` should be unset.
     */
    inputContent?: string;
    /**
     * Input video location. Currently, only [Google Cloud
     * Storage](https://cloud.google.com/storage/) URIs are supported, which
     * must be specified in the following format: `gs://bucket-id/object-id`
     * (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more
     * information, see [Request URIs](/storage/docs/reference-uris). A video
     * URI may include wildcards in `object-id`, and thus identify multiple
     * videos. Supported wildcards: &#39;*&#39; to match 0 or more characters;
     * &#39;?&#39; to match 1 character. If unset, the input video should be
     * embedded in the request as `input_content`. If set, `input_content`
     * should be unset.
     */
    inputUri?: string;
    /**
     * Optional cloud region where annotation should take place. Supported cloud
     * regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no
     * region is specified, a region will be determined based on video file
     * location.
     */
    locationId?: string;
    /**
     * Optional location where the output (in JSON format) should be stored.
     * Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
     * URIs are supported, which must be specified in the following format:
     * `gs://bucket-id/object-id` (other URI formats return
     * google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request
     * URIs](/storage/docs/reference-uris).
     */
    outputUri?: string;
    /**
     * Additional video context and/or feature-specific parameters.
     */
    videoContext?: Schema$GoogleCloudVideointelligenceV1_VideoContext;
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame[];
  }
  /**
   * Config for EXPLICIT_CONTENT_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentDetectionConfig {
    /**
     * Model to use for explicit content detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_LabelSegment[];
  }
  /**
   * Config for LABEL_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelDetectionConfig {
    /**
     * What labels should be detected with LABEL_DETECTION, in addition to
     * video-level labels or segment-level labels. If unspecified, defaults to
     * `SHOT_MODE`.
     */
    labelDetectionMode?: string;
    /**
     * Model to use for label detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
    /**
     * Whether the video has been shot from a stationary (i.e. non-moving)
     * camera. When set to true, might improve detection accuracy for moving
     * objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.
     */
    stationaryCamera?: boolean;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
  }
  /**
   * Config for SHOT_CHANGE_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ShotChangeDetectionConfig {
    /**
     * Model to use for shot change detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Output only. Approximate percentage processed thus far. Guaranteed to be
     * 100 when fully processed.
     */
    progressPercent?: number;
    /**
     * Output only. Time when the request was received.
     */
    startTime?: string;
    /**
     * Output only. Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults {
    /**
     * Output only. Non-streaming error only. If set, indicates an error. Note
     * that for a single `AnnotateVideoRequest` some videos may succeed and some
     * may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation;
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Output only. Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
  }
  /**
   * Video context and/or feature-specific parameters.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoContext {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1_ExplicitContentDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1_LabelDetectionConfig;
    /**
     * Non-streaming request only. Video segments to annotate. The segments may
     * overlap and are not required to be contiguous or span the whole video. If
     * unspecified, each video is treated as a single segment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1_ShotChangeDetectionConfig;
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunning_CancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunning_ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunning_Operation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunning_Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobuf_Empty {}
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$GoogleRpc_Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Operations {
    root: Videointelligence;
    constructor(root: Videointelligence) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * videointelligence.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
     * or other methods to check whether the cancellation succeeded or whether
     * the operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with an
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to `Code.CANCELLED`.
     * @alias videointelligence.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().GoogleLongrunning_CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(params?: Params$Resource$Operations$Cancel, options?: MethodOptions):
        AxiosPromise<Schema$GoogleProtobuf_Empty>;
    cancel(
        params: Params$Resource$Operations$Cancel,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    cancel(
        params: Params$Resource$Operations$Cancel,
        callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Operations$Cancel|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobuf_Empty>):
        void|AxiosPromise<Schema$GoogleProtobuf_Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf_Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobuf_Empty>(parameters);
      }
    }


    /**
     * videointelligence.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the
     * client is no longer interested in the operation result. It does not
     * cancel the operation. If the server doesn't support this method, it
     * returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias videointelligence.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Operations$Delete, options?: MethodOptions):
        AxiosPromise<Schema$GoogleProtobuf_Empty>;
    delete(
        params: Params$Resource$Operations$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    delete(
        params: Params$Resource$Operations$Delete,
        callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobuf_Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Operations$Delete|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleProtobuf_Empty>,
        callback?: BodyResponseCallback<Schema$GoogleProtobuf_Empty>):
        void|AxiosPromise<Schema$GoogleProtobuf_Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations/{+name}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf_Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleProtobuf_Empty>(parameters);
      }
    }


    /**
     * videointelligence.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias videointelligence.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunning_Operation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void|AxiosPromise<Schema$GoogleLongrunning_Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations/{+name}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning_Operation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunning_Operation>(parameters);
      }
    }


    /**
     * videointelligence.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias videointelligence.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Operations$List, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunning_ListOperationsResponse>;
    list(
        params: Params$Resource$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_ListOperationsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunning_ListOperationsResponse>): void;
    list(
        params: Params$Resource$Operations$List,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunning_ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleLongrunning_ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Operations$List|
        BodyResponseCallback<Schema$GoogleLongrunning_ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_ListOperationsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleLongrunning_ListOperationsResponse>):
        void|AxiosPromise<Schema$GoogleLongrunning_ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning_ListOperationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleLongrunning_ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunning_CancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }


  export class Resource$Videos {
    root: Videointelligence;
    constructor(root: Videointelligence) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * videointelligence.videos.annotate
     * @desc Performs asynchronous video annotation. Progress and results can be
     * retrieved through the `google.longrunning.Operations` interface.
     * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
     * `Operation.response` contains `AnnotateVideoResponse` (results).
     * @alias videointelligence.videos.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudVideointelligenceV1_AnnotateVideoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(params?: Params$Resource$Videos$Annotate, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunning_Operation>;
    annotate(
        params: Params$Resource$Videos$Annotate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(
        params: Params$Resource$Videos$Annotate,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(callback:
                 BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(
        paramsOrCallback?: Params$Resource$Videos$Annotate|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void|AxiosPromise<Schema$GoogleLongrunning_Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/videos:annotate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning_Operation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunning_Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Annotate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudVideointelligenceV1_AnnotateVideoRequest;
  }
}
