<template>
<template-view>
    <div class="py-3">
        <div class="container">
            <h4>
                Feedback
            </h4>
            <h6>Share your feedback and suggestions about this app</h6>
            <div class="feedback">
                <img src="../assets/feedback.png">
                <div class="form-feed">
                    <div class="row " >
                        <div class="col-md-6">
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Feedback" rows="3"></textarea>
                            </div>
                            <div class="py-3">
                                <button class="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template-view>
</template>

<script>
import TemplateView from '@/views/TemplateView'
export default {
    name: 'FeedbackView',
    components: {
        TemplateView
    }
}
</script>

<style lang="scss" scoped>

</style>
