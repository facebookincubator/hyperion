/**
 * Copyright (c) Meta Platforms, Inc. and affiliates. All Rights Reserved.
 */
import { EventHandlerAttributeInterceptor } from "./EventHandlerAttributeInterceptor";
import { IHTMLElementtPrototype } from "./IHTMLElement";
// Technically we can chose any of HTMLElement, SVGElement, or MathElement
const IGlobalEventHandlersPrototype = IHTMLElementtPrototype;
//#region global Event Handlers https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers
export const onabort = new EventHandlerAttributeInterceptor("onabort", IGlobalEventHandlersPrototype);
export const onanimationcancel = new EventHandlerAttributeInterceptor("onanimationcancel", IGlobalEventHandlersPrototype);
export const onanimationend = new EventHandlerAttributeInterceptor("onanimationend", IGlobalEventHandlersPrototype);
export const onanimationiteration = new EventHandlerAttributeInterceptor("onanimationiteration", IGlobalEventHandlersPrototype);
export const onanimationstart = new EventHandlerAttributeInterceptor("onanimationstart", IGlobalEventHandlersPrototype);
export const onauxclick = new EventHandlerAttributeInterceptor("onauxclick", IGlobalEventHandlersPrototype);
export const onblur = new EventHandlerAttributeInterceptor("onblur", IGlobalEventHandlersPrototype);
export const oncanplay = new EventHandlerAttributeInterceptor("oncanplay", IGlobalEventHandlersPrototype);
export const oncanplaythrough = new EventHandlerAttributeInterceptor("oncanplaythrough", IGlobalEventHandlersPrototype);
export const onchange = new EventHandlerAttributeInterceptor("onchange", IGlobalEventHandlersPrototype);
export const onclick = new EventHandlerAttributeInterceptor("onclick", IGlobalEventHandlersPrototype);
export const onclose = new EventHandlerAttributeInterceptor("onclose", IGlobalEventHandlersPrototype);
export const oncontextmenu = new EventHandlerAttributeInterceptor("oncontextmenu", IGlobalEventHandlersPrototype);
export const oncuechange = new EventHandlerAttributeInterceptor("oncuechange", IGlobalEventHandlersPrototype);
export const ondblclick = new EventHandlerAttributeInterceptor("ondblclick", IGlobalEventHandlersPrototype);
export const ondrag = new EventHandlerAttributeInterceptor("ondrag", IGlobalEventHandlersPrototype);
export const ondragend = new EventHandlerAttributeInterceptor("ondragend", IGlobalEventHandlersPrototype);
export const ondragenter = new EventHandlerAttributeInterceptor("ondragenter", IGlobalEventHandlersPrototype);
export const ondragleave = new EventHandlerAttributeInterceptor("ondragleave", IGlobalEventHandlersPrototype);
export const ondragover = new EventHandlerAttributeInterceptor("ondragover", IGlobalEventHandlersPrototype);
export const ondragstart = new EventHandlerAttributeInterceptor("ondragstart", IGlobalEventHandlersPrototype);
export const ondrop = new EventHandlerAttributeInterceptor("ondrop", IGlobalEventHandlersPrototype);
export const ondurationchange = new EventHandlerAttributeInterceptor("ondurationchange", IGlobalEventHandlersPrototype);
export const onemptied = new EventHandlerAttributeInterceptor("onemptied", IGlobalEventHandlersPrototype);
export const onended = new EventHandlerAttributeInterceptor("onended", IGlobalEventHandlersPrototype);
export const onfocus = new EventHandlerAttributeInterceptor("onfocus", IGlobalEventHandlersPrototype);
export const onformdata = new EventHandlerAttributeInterceptor("onformdata", IGlobalEventHandlersPrototype);
export const ongotpointercapture = new EventHandlerAttributeInterceptor("ongotpointercapture", IGlobalEventHandlersPrototype);
export const oninput = new EventHandlerAttributeInterceptor("oninput", IGlobalEventHandlersPrototype);
export const oninvalid = new EventHandlerAttributeInterceptor("oninvalid", IGlobalEventHandlersPrototype);
export const onkeydown = new EventHandlerAttributeInterceptor("onkeydown", IGlobalEventHandlersPrototype);
export const onkeypress = new EventHandlerAttributeInterceptor("onkeypress", IGlobalEventHandlersPrototype);
export const onkeyup = new EventHandlerAttributeInterceptor("onkeyup", IGlobalEventHandlersPrototype);
export const onload = new EventHandlerAttributeInterceptor("onload", IGlobalEventHandlersPrototype);
export const onloadeddata = new EventHandlerAttributeInterceptor("onloadeddata", IGlobalEventHandlersPrototype);
export const onloadedmetadata = new EventHandlerAttributeInterceptor("onloadedmetadata", IGlobalEventHandlersPrototype);
export const onloadstart = new EventHandlerAttributeInterceptor("onloadstart", IGlobalEventHandlersPrototype);
export const onlostpointercapture = new EventHandlerAttributeInterceptor("onlostpointercapture", IGlobalEventHandlersPrototype);
export const onmousedown = new EventHandlerAttributeInterceptor("onmousedown", IGlobalEventHandlersPrototype);
export const onmouseenter = new EventHandlerAttributeInterceptor("onmouseenter", IGlobalEventHandlersPrototype);
export const onmouseleave = new EventHandlerAttributeInterceptor("onmouseleave", IGlobalEventHandlersPrototype);
export const onmousemove = new EventHandlerAttributeInterceptor("onmousemove", IGlobalEventHandlersPrototype);
export const onmouseout = new EventHandlerAttributeInterceptor("onmouseout", IGlobalEventHandlersPrototype);
export const onmouseover = new EventHandlerAttributeInterceptor("onmouseover", IGlobalEventHandlersPrototype);
export const onmouseup = new EventHandlerAttributeInterceptor("onmouseup", IGlobalEventHandlersPrototype);
export const onpause = new EventHandlerAttributeInterceptor("onpause", IGlobalEventHandlersPrototype);
export const onplay = new EventHandlerAttributeInterceptor("onplay", IGlobalEventHandlersPrototype);
export const onplaying = new EventHandlerAttributeInterceptor("onplaying", IGlobalEventHandlersPrototype);
export const onpointercancel = new EventHandlerAttributeInterceptor("onpointercancel", IGlobalEventHandlersPrototype);
export const onpointerdown = new EventHandlerAttributeInterceptor("onpointerdown", IGlobalEventHandlersPrototype);
export const onpointerenter = new EventHandlerAttributeInterceptor("onpointerenter", IGlobalEventHandlersPrototype);
export const onpointerleave = new EventHandlerAttributeInterceptor("onpointerleave", IGlobalEventHandlersPrototype);
export const onpointermove = new EventHandlerAttributeInterceptor("onpointermove", IGlobalEventHandlersPrototype);
export const onpointerout = new EventHandlerAttributeInterceptor("onpointerout", IGlobalEventHandlersPrototype);
export const onpointerover = new EventHandlerAttributeInterceptor("onpointerover", IGlobalEventHandlersPrototype);
export const onpointerup = new EventHandlerAttributeInterceptor("onpointerup", IGlobalEventHandlersPrototype);
export const onprogress = new EventHandlerAttributeInterceptor("onprogress", IGlobalEventHandlersPrototype);
export const onratechange = new EventHandlerAttributeInterceptor("onratechange", IGlobalEventHandlersPrototype);
export const onreset = new EventHandlerAttributeInterceptor("onreset", IGlobalEventHandlersPrototype);
export const onresize = new EventHandlerAttributeInterceptor("onresize", IGlobalEventHandlersPrototype);
export const onscroll = new EventHandlerAttributeInterceptor("onscroll", IGlobalEventHandlersPrototype);
export const onsecuritypolicyviolation = new EventHandlerAttributeInterceptor("onsecuritypolicyviolation", IGlobalEventHandlersPrototype);
export const onseeked = new EventHandlerAttributeInterceptor("onseeked", IGlobalEventHandlersPrototype);
export const onseeking = new EventHandlerAttributeInterceptor("onseeking", IGlobalEventHandlersPrototype);
export const onselect = new EventHandlerAttributeInterceptor("onselect", IGlobalEventHandlersPrototype);
export const onselectionchange = new EventHandlerAttributeInterceptor("onselectionchange", IGlobalEventHandlersPrototype);
export const onselectstart = new EventHandlerAttributeInterceptor("onselectstart", IGlobalEventHandlersPrototype);
export const onslotchange = new EventHandlerAttributeInterceptor("onslotchange", IGlobalEventHandlersPrototype);
export const onstalled = new EventHandlerAttributeInterceptor("onstalled", IGlobalEventHandlersPrototype);
export const onsubmit = new EventHandlerAttributeInterceptor("onsubmit", IGlobalEventHandlersPrototype);
export const onsuspend = new EventHandlerAttributeInterceptor("onsuspend", IGlobalEventHandlersPrototype);
export const ontimeupdate = new EventHandlerAttributeInterceptor("ontimeupdate", IGlobalEventHandlersPrototype);
export const ontoggle = new EventHandlerAttributeInterceptor("ontoggle", IGlobalEventHandlersPrototype);
export const ontouchcancel = new EventHandlerAttributeInterceptor("ontouchcancel", IGlobalEventHandlersPrototype);
export const ontouchend = new EventHandlerAttributeInterceptor("ontouchend", IGlobalEventHandlersPrototype);
export const ontouchmove = new EventHandlerAttributeInterceptor("ontouchmove", IGlobalEventHandlersPrototype);
export const ontouchstart = new EventHandlerAttributeInterceptor("ontouchstart", IGlobalEventHandlersPrototype);
export const ontransitioncancel = new EventHandlerAttributeInterceptor("ontransitioncancel", IGlobalEventHandlersPrototype);
export const ontransitionend = new EventHandlerAttributeInterceptor("ontransitionend", IGlobalEventHandlersPrototype);
export const ontransitionrun = new EventHandlerAttributeInterceptor("ontransitionrun", IGlobalEventHandlersPrototype);
export const ontransitionstart = new EventHandlerAttributeInterceptor("ontransitionstart", IGlobalEventHandlersPrototype);
export const onvolumechange = new EventHandlerAttributeInterceptor("onvolumechange", IGlobalEventHandlersPrototype);
export const onwaiting = new EventHandlerAttributeInterceptor("onwaiting", IGlobalEventHandlersPrototype);
export const onwebkitanimationend = new EventHandlerAttributeInterceptor("onwebkitanimationend", IGlobalEventHandlersPrototype);
export const onwebkitanimationiteration = new EventHandlerAttributeInterceptor("onwebkitanimationiteration", IGlobalEventHandlersPrototype);
export const onwebkitanimationstart = new EventHandlerAttributeInterceptor("onwebkitanimationstart", IGlobalEventHandlersPrototype);
export const onwebkittransitionend = new EventHandlerAttributeInterceptor("onwebkittransitionend", IGlobalEventHandlersPrototype);
export const onwheel = new EventHandlerAttributeInterceptor("onwheel", IGlobalEventHandlersPrototype);
export const onafterprint = new EventHandlerAttributeInterceptor("onafterprint", IGlobalEventHandlersPrototype);
export const onbeforeprint = new EventHandlerAttributeInterceptor("onbeforeprint", IGlobalEventHandlersPrototype);
export const onbeforeunload = new EventHandlerAttributeInterceptor("onbeforeunload", IGlobalEventHandlersPrototype);
export const ongamepadconnected = new EventHandlerAttributeInterceptor("ongamepadconnected", IGlobalEventHandlersPrototype);
export const ongamepaddisconnected = new EventHandlerAttributeInterceptor("ongamepaddisconnected", IGlobalEventHandlersPrototype);
export const onhashchange = new EventHandlerAttributeInterceptor("onhashchange", IGlobalEventHandlersPrototype);
export const onlanguagechange = new EventHandlerAttributeInterceptor("onlanguagechange", IGlobalEventHandlersPrototype);
export const onmessage = new EventHandlerAttributeInterceptor("onmessage", IGlobalEventHandlersPrototype);
export const onmessageerror = new EventHandlerAttributeInterceptor("onmessageerror", IGlobalEventHandlersPrototype);
export const onoffline = new EventHandlerAttributeInterceptor("onoffline", IGlobalEventHandlersPrototype);
export const ononline = new EventHandlerAttributeInterceptor("ononline", IGlobalEventHandlersPrototype);
export const onpagehide = new EventHandlerAttributeInterceptor("onpagehide", IGlobalEventHandlersPrototype);
export const onpageshow = new EventHandlerAttributeInterceptor("onpageshow", IGlobalEventHandlersPrototype);
export const onpopstate = new EventHandlerAttributeInterceptor("onpopstate", IGlobalEventHandlersPrototype);
export const onrejectionhandled = new EventHandlerAttributeInterceptor("onrejectionhandled", IGlobalEventHandlersPrototype);
export const onstorage = new EventHandlerAttributeInterceptor("onstorage", IGlobalEventHandlersPrototype);
export const onunhandledrejection = new EventHandlerAttributeInterceptor("onunhandledrejection", IGlobalEventHandlersPrototype);
export const onunload = new EventHandlerAttributeInterceptor("onunload", IGlobalEventHandlersPrototype);
//#endretion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUdsb2JhbEV2ZW50SGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJR2xvYmFsRXZlbnRIYW5kbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELDBFQUEwRTtBQUMxRSxNQUFNLDZCQUE2QixHQUFHLHNCQUFzQixDQUFDO0FBRTdELG9HQUFvRztBQUNwRyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN0RyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFDMUgsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksZ0NBQWdDLENBQUMsZ0JBQWdCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUNwSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFDaEksTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxrQkFBa0IsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3hILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLFlBQVksRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQzVHLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGdDQUFnQyxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3BHLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQzFHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdDLENBQUMsa0JBQWtCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN4SCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN0RyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN0RyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxlQUFlLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUNsSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxZQUFZLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUM1RyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxRQUFRLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUNwRyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUMxRyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxZQUFZLEVBQUUsNkJBQTZCLENBQUMsQ0FB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