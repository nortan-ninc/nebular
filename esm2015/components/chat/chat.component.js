/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, ViewChild, ElementRef, ContentChildren, QueryList, ContentChild, } from '@angular/core';
import { convertToBoolProperty, emptyStatusWarning } from '../helpers';
import { NbChatFormComponent } from './chat-form.component';
import { NbChatMessageComponent } from './chat-message.component';
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * @styles
 *
 * chat-background-color:
 * chat-border:
 * chat-border-radius:
 * chat-shadow:
 * chat-padding:
 * chat-scrollbar-color:
 * chat-scrollbar-background-color:
 * chat-scrollbar-width:
 * chat-text-color:
 * chat-text-font-family:
 * chat-text-font-size:
 * chat-text-font-weight:
 * chat-text-line-height:
 * chat-header-text-font-family:
 * chat-header-text-font-size:
 * chat-header-text-font-weight:
 * chat-header-text-line-height:
 * chat-tiny-height:
 * chat-small-height:
 * chat-medium-height:
 * chat-large-height:
 * chat-giant-height:
 * chat-basic-background-color:
 * chat-basic-text-color:
 * chat-primary-background-color:
 * chat-primary-text-color:
 * chat-success-background-color:
 * chat-success-text-color:
 * chat-info-background-color:
 * chat-info-text-color:
 * chat-warning-background-color:
 * chat-warning-text-color:
 * chat-danger-background-color:
 * chat-danger-text-color:
 * chat-control-background-color:
 * chat-control-text-color:
 * chat-divider-color:
 * chat-divider-style:
 * chat-divider-width:
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
export class NbChatComponent {
    constructor() {
        this._status = 'basic';
        this.noMessagesPlaceholder = 'No messages yet.';
        this._scrollBottom = true;
    }
    /**
     * Chat status color (adds specific styles):
     * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
     */
    get status() {
        return this._status;
    }
    set status(value) {
        if (!value) {
            emptyStatusWarning('NbChat');
            value = 'basic';
        }
        this._status = value;
    }
    /**
     * Scroll chat to the bottom of the list when a new message arrives
     */
    get scrollBottom() {
        return this._scrollBottom;
    }
    set scrollBottom(value) {
        this._scrollBottom = convertToBoolProperty(value);
    }
    ngOnChanges(changes) {
        if ('status' in changes) {
            this.updateFormStatus();
        }
    }
    ngAfterContentInit() {
        this.updateFormStatus();
    }
    ngAfterViewInit() {
        this.messages.changes
            .subscribe((messages) => {
            this.messages = messages;
            this.updateView();
        });
        this.updateView();
    }
    updateView() {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    }
    scrollListBottom() {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    }
    updateFormStatus() {
        if (this.chatForm) {
            this.chatForm.setStatus(this.status);
        }
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
}
NbChatComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat',
                template: `
    <div class="header">{{ title }}</div>
    <div class="scrollable" #scrollable>
      <div class="messages">
        <ng-content select="nb-chat-message"></ng-content>
        <p class="no-messages" *ngIf="!messages?.length">{{ noMessagesPlaceholder }}</p>
      </div>
    </div>
    <div class="form">
      <ng-content select="nb-chat-form"></ng-content>
    </div>
  `,
                styles: [":host{display:flex;flex-direction:column;position:relative;height:100%}\n"]
            },] }
];
NbChatComponent.propDecorators = {
    title: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    noMessagesPlaceholder: [{ type: Input }],
    scrollBottom: [{ type: Input }],
    scrollable: [{ type: ViewChild, args: ['scrollable',] }],
    messages: [{ type: ContentChildren, args: [NbChatMessageComponent,] }],
    chatForm: [{ type: ContentChild, args: [NbChatFormComponent,] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }]
};
//# sourceMappingURL=chat.component.js.map