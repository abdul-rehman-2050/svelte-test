<script>

    const email="st@gmail.com"
    const store_meta = {

    }
</script>



<div>

    <h1>Welcome Store Owner</h1>
    
    
    <form>
        <label for="sname">Store Name</label>
        <input class="input-form" id="sname" name="store_name" type="text" placeholder="store name">
        <input name="owner_email" type="hidden" value={email}>
        <input name="store_meta" type="hidden" value={store_meta}>
        <button class="btn-primary" type="submit">Create New Store</button>
    </form>
    
    </div>